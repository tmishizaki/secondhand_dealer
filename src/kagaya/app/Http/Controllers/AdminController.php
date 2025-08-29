<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Customer;
use App\Models\Item;
use App\Models\ItemImage;

class AdminController extends Controller
{
    //
    function index(Request $request) {
        if (!$request->session()->has('loginStatus')) {
              return redirect('/admin/login');
        }
        return view('admin.index');
    }

    function login(Request $request) {
        if ($request->session()->has('loginStatus')) {
            return redirect('/admin');
        }
        $data = ['error' => ''];
        return view('admin.login', $data);
    }

    function loginCheck(Request $request) {
        $user = $request->user;
        $pass = $request->password;
        if ($user == 'admin' && $pass == '123') {
            //session()->regenerate();
            $request->session()->regenerate();
            $request->session()->put('loginStatus', $user);
            //session(['loginStatus' => $user]);
            return redirect('/admin');
        } else {
            $data = ['error' => 'ユーザー名か、パスワードが違います。'];
            return view('admin.login', $data);
        }
        //return session('loginStatus');
    }

    function logout(Request $request) {
        $request->session()->flush();
        return redirect('/admin/login');
    }


    function itemList(Request $request) {

        $page = $request->page - 1;
        $page_limit = 5;
        $page_offset = $page * $page_limit;

        $result_customers = [];

        $query = Customer::query()->leftJoin('items', 'customers.id', '=', 'items.customer_id');

        // $query = Customer::query();
        if ($request->name) {
             $query->where('customers.name', 'like', "%{$request->name}%");
        }
        if ($request->email) {
             $query->where('customers.email', 'like', "%{$request->email}%");
        }
        if ($request->status) {
            $query->where('items.status', $request->status);
        }
        if ($request->item_type) {
            $query->where('items.item_type', $request->item_type);
        }
        $countQuery = clone $query;
        $query->select('customers.id', 'customers.name', 'customers.email', 'items.id as item_id', 'items.item_name', 'items.item_type', 'items.item_price', 'items.status');

        $result_customers = $query->offset($page_offset)->orderBy('customers.created_at', $request->order)->limit($page_limit)->get();



        // $customers = [];
        // // $items = [];
        // foreach($result_customers as $customer) {
        //     $query = Item::query();
        //     $query->where('customer_id', $customer->id);
        //     if ($request->status) {
        //         $query->where('status', $request->status);
        //     }
        //     if ($request->item_type) {
        //         $query->where('item_type', $request->item_type);
        //     }
        //     $item = $query->limit(1)->get();

        //     $customers[] = ['customer' => $customer, 'item' => $item[0]];
        // }

        $count = $countQuery->orderBy('customers.created_at', $request->order)->count();
        $page_max = ceil($count / $page_limit);

        $links = [];
        for($i=1; $i<=$page_max; $i++) {
            $is_active = false;
            if ($i == $page + 1) {
                $is_active = true;
            }
            $links[] = ['label'=> $i, 'active' => $is_active];
        }


        $return_array = ['data' => $result_customers, 'links' => $links];

        return $return_array;
    }

    function statusUpdate($item_id, Request $request) {
        $item = Item::find($item_id);
        $item->status = $request->status;
        $item->save();
        return $item;
    }

    function getItem($id) {
        $customer = Customer::find($id);
        $customer->items;
        $item = $customer->items[0];
        $images = ItemImage::where('item_id', $customer->items[0]->id)->get();
        $resultArray = ['customer' => $customer, 'item' => $item,'images' => $images];

        return $resultArray;
    }

    function inputUpdate($id, Request $request) {
        $customer = Customer::find($id);
        $customer->name = $request->customer['name'];
        $customer->email = $request->customer['email'];
        $customer->prefecture = $request->customer['prefecture'];
        $customer->addres = $request->customer['addres'];
        $customer->save();

        $customer->items;
        $item = $customer->items[0];
        $item->item_type = $request->item['item_type'];
        $item->item_name = $request->item['item_name'];
        $item->item_price = $request->item['item_price'];
        $item->item_detail = $request->item['item_detail'];
        $item->item_comment = $request->item['item_comment'];
        $item->status = $request->item['status'];
        $item->save();

        return "ok";
    }

    function cutomerList() {
        return Customer::all();
    }
}

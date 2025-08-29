<?php

namespace App\View\Components;

use Illuminate\View\Component;

class Navi extends Component
{
    public $homeClass;
    public $itemsClass;
    public $purchaseClass;
    public $companyClass;
    public $infoClass;
    public $contactClass;

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct($path = 'home')
    {
        //

        $this->homeClass = '';
        $this->itemsClass = '';
        $this->purchaseClass = '';
        $this->companyClass = '';
        $this->infoClass = '';
        $this->contactClass = '';

        switch ($path) {
            case 'home':
                $this->homeClass = 'current';
                break;
            case 'item':
                $this->itemsClass = 'current';
                break;
            case 'purchase':
                $this->purchaseClass = 'current';
                break;
            case 'company':
                $this->companyClass = 'current';
                break;
            case 'owner':
                $this->infoClass = 'current';
                break;
            case 'contact':
                $this->contactClass = 'current';
                break;
        }
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('components.navi');
    }
}

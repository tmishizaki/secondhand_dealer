<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class RegisterMail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($toMail, $toName, $title, $data, $view)
    {
        //
        $this->toMail = $toMail;
        $this->toName = $toName;
        $this->title = $title;
        $this->sendData = $data;
        $this->view = $view;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->to($this->toMail, $this->toName)
        ->subject($this->title)
        ->view(['text' => $this->view])
        ->with($this->sendData);
    }
}

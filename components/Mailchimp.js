import React, { Component } from 'react';
import Mailchimp from 'react-mailchimp-form'

export default function Form() {

    return (
        <div>
            <Mailchimp className='MailchimpStyle'
                action='https://gmail.us10.list-manage.com/subscribe/post?u=115e80268b64a29499a4e042e&amp;id=d5af36f413'
                fields={[
                    {
                        name: 'EMAIL',
                        placeholder: 'Email',
                        type: 'email',
                        required: true
                    }
                ]}

            />

            <style jsx>{`
            .MailchimpStyle button {
                color: yellow !important;;  
            }
            `}</style>
        </div>

    );





}
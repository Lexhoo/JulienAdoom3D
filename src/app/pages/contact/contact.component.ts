import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Email } from 'src/app/models/email';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
alert:boolean=false;

  ngOnInit(): void {
  }
  mail :Email = new Email();

  constructor(private http: HttpClient, private emailService :EmailService) { }

  public envoiEmail() {
    this.emailService.envoiEmail(this.mail).subscribe({
        next: (data) => {
        console.log(data);
      },
      error: (err) => {
        console.log("une erreur s'est produite lors de l'envoi du mail.");
      }
    });
  }

  public onSubmit() {
    this.envoiEmail();
    this.alert=true

  }
  closeAlert(){
    this.alert=false
  }


}



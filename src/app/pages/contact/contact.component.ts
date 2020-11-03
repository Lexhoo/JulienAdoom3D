import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Email } from 'src/app/models/email';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
messageValid = false;
FormData: FormGroup;

constructor(private http: HttpClient, private emailService :EmailService, private builder: FormBuilder) { }

  ngOnInit(): void {

  this.FormData = this.builder.group({
  nom: new FormControl('', Validators.required),
  email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
  message : new FormControl('', Validators.required),
  phone : new FormControl(),
  compagny : new FormControl(),

  })
}



  public onSubmit(FormData) {
    this.emailService.envoiEmail(FormData).subscribe({
        next: (data) => {
          this.FormData.reset();
          this.messageValid = true;
        console.log(data);
      },
      error: (err) => {
        console.log("une erreur s'est produite lors de l'envoi du mail.", err);
      }
    });
  }

}




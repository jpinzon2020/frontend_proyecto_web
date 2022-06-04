import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user/user';
import { SendMailService } from 'src/app/services/email/send-mail.service';
 
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  emailControl = new FormControl('', [Validators.required, Validators.email]);
  passwordControl = new FormControl('', [ 
    Validators.required,
    Validators.minLength(8),
    Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[=#@$!%*?&]).{1,}')])

  confirmPasswordControl = new FormControl('', [Validators.required])
  responseMessages: string[] = [];
  urlParams: any;
  canChangePassword: boolean = false;
  successSendEmail = false;
  errorMessage = 'El correo no existe!!';

  user = new User();
  
  constructor(
    private route: ActivatedRoute,
    private sendMailService: SendMailService  
  ) {  }

  ngOnInit(): void {
    this.urlParams = this.route.snapshot.queryParams;
    let now = new Date();
    if (Object.keys(this.urlParams).length != 0 && this.urlParams.expiry > JSON.stringify(now.getTime())) {
      this.canChangePassword = true;
    }
  }

  onChangePassword() {

    this.sendMailService.sendForgotPassService(this.user.email).subscribe((result)=> {
      
    }, () => {
      this.successSendEmail = false;
    });    
  }

  
  onContinue() {
    
  }
  

}

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  { 
    path: '', loadChildren: './tabs/tabs.module#TabsPageModule' 
  },

  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
 
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },  
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },  

  {
    path: 'otp',
    loadChildren: () => import('./otp/otp.module').then( m => m.OtpPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
 {
    path: 'home2',
    loadChildren: () => import('./home2/home2.module').then( m => m.Home2PageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'editprofile',
    loadChildren: () => import('./editprofile/editprofile.module').then( m => m.EditprofilePageModule)
  },
  {
    path: 'addpayment',
    loadChildren: () => import('./addpayment/addpayment.module').then( m => m.AddpaymentPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'privacy',
    loadChildren: () => import('./privacy/privacy.module').then( m => m.PrivacyPageModule)
  },
  {
    path: 'terms',
    loadChildren: () => import('./terms/terms.module').then( m => m.TermsPageModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./faq/faq.module').then( m => m.FaqPageModule)
  },
  {
    path: 'tribes',
    loadChildren: () => import('./tribes/tribes.module').then( m => m.TribesPageModule)
  },
  {
    path: 'thetable',
    loadChildren: () => import('./thetable/thetable.module').then( m => m.ThetablePageModule)
  },
  {
    path: 'charitydetail/:id',
    loadChildren: () => import('./charitydetail/charitydetail.module').then( m => m.CharitydetailPageModule)
  },
  {
    path: 'searchteam',
    loadChildren: () => import('./searchteam/searchteam.module').then( m => m.SearchteamPageModule)
  },
  {
    path: 'activitydetail/:id',
    loadChildren: () => import('./activitydetail/activitydetail.module').then( m => m.ActivitydetailPageModule)
  },
  {
    path: 'teamdetail/:id',
    loadChildren: () => import('./teamdetail/teamdetail.module').then( m => m.TeamdetailPageModule)
  },
  {
    path: 'createteam',
    loadChildren: () => import('./createteam/createteam.module').then( m => m.CreateteamPageModule)
  },
  {
    path: 'thetabledetail',
    loadChildren: () => import('./thetabledetail/thetabledetail.module').then( m => m.ThetabledetailPageModule)
  },
  {
    path: 'addamount',
    loadChildren: () => import('./addamount/addamount.module').then( m => m.AddamountPageModule)
  },
  {
    path: 'donationjar',
    loadChildren: () => import('./donationjar/donationjar.module').then( m => m.DonationjarPageModule)
  },
    {
    path: 'teamdetails/:id',
    loadChildren: () => import('./teamdetails/teamdetails.module').then( m => m.TeamdetailsPageModule)
  },
  {
    path: 'jointeamconfirm',
    loadChildren: () => import('./jointeamconfirm/jointeamconfirm.module').then( m => m.JointeamconfirmPageModule)
  },
  {
    path: 'leaveteamconfirm',
    loadChildren: () => import('./leaveteamconfirm/leaveteamconfirm.module').then( m => m.LeaveteamconfirmPageModule)
  },
  {
    path: 'edit_payment/:id',
    loadChildren: () => import('./edit-payment/edit-payment.module').then( m => m.EditPaymentPageModule)
  },
  {
    path: 'deleteconfirm',
    loadChildren: () => import('./deleteconfirm/deleteconfirm.module').then( m => m.DeleteconfirmPageModule)
  },
  {
    path: 'paymentlistmodal',
    loadChildren: () => import('./paymentlistmodal/paymentlistmodal.module').then( m => m.PaymentlistmodalPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

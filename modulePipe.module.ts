import {NgModule}                 from '@angular/core';
import {CommonModule}             from '@angular/common';
import {AddUsersViewDirective}    from '@app/admin/users-crm/directives/add-users-view.directive';
import {AttachUsersViewDirective} from '@app/admin/users-crm/directives/attach-users-view.directive';

@NgModule({
              declarations: [AddUsersViewDirective, AttachUsersViewDirective],
              imports: [CommonModule],
              exports: [AddUsersViewDirective, AttachUsersViewDirective]
          })

export class UsersViewModule {
}

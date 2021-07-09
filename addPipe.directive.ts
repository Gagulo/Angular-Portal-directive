import {Directive, Input, OnInit, ViewContainerRef} from '@angular/core';
import {UsersViewService}                           from '@app/admin/users-crm/services/users-view.service';

@Directive({
               selector: '[addUsersViewTo]'
           })
export class AddUsersViewDirective implements OnInit {
    @Input('addUsersViewTo') public targetName: string;

    constructor(
        private usersService: UsersViewService,
        private viewContainerRef: ViewContainerRef
    ) { }

    public ngOnInit(): void {
        this.usersService.addView(this.targetName, this.viewContainerRef);
    }

}

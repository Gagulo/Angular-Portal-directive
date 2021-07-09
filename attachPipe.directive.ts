import {Directive, Input, OnDestroy, OnInit, TemplateRef} from '@angular/core';
import {UsersViewService}                                 from '@app/admin/users-crm/services/users-view.service';

@Directive({
               selector: '[attachUsersViewTo]'
           })
export class AttachUsersViewDirective implements OnInit, OnDestroy {
    @Input('attachUsersViewTo') public targetName: string;

    constructor(
        private usersService: UsersViewService,
        private template: TemplateRef<HTMLAllCollection>
    ) { }

    public ngOnInit(): void {
        this.usersService.attachView(this.targetName, this.template);
    }

    public ngOnDestroy(): void {
        this.usersService.clearView(this.targetName);
    }

}

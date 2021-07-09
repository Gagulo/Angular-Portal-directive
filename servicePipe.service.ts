import {Injectable, TemplateRef, ViewContainerRef} from '@angular/core';

@Injectable({
                providedIn: 'root'
            })
export class UsersViewService {
    private targets: Map<string, ViewContainerRef>;

    constructor() {
        this.targets = new Map<string, ViewContainerRef>();
    }

    public addView(target: string, viewContainer: ViewContainerRef): void {
        this.targets.set(target, viewContainer);
    }

    public clearView(targetName: string): void {
        this.getView(targetName).clear();
    }

    public attachView(targetName: string, template: TemplateRef<HTMLAllCollection>): void {
        this.getView(targetName).createEmbeddedView(template);
    }

    private getView(targetName: string): ViewContainerRef {
        return this.targets.has(targetName) ? this.targets.get(targetName) : null;
    }
}

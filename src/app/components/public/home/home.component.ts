import { Component, OnInit } from '@angular/core';
import { CommitteeMemberInfo, COMMITTEE_MEMBERS, WEB_ROOT } from 'src/consts';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    protected committeeMembersRowLayout: (CommitteeMemberInfo | null)[][] = [[]];
    protected WEB_ROOT = WEB_ROOT;

    constructor() {
        // convert committee members into row layout
        if (COMMITTEE_MEMBERS.length % 2) {
            this.committeeMembersRowLayout[0].push(null);
        }

        for (const member of COMMITTEE_MEMBERS) {
            if (this.committeeMembersRowLayout[this.committeeMembersRowLayout.length - 1].length == 2) {
                this.committeeMembersRowLayout.push([]);
            }

            this.committeeMembersRowLayout[this.committeeMembersRowLayout.length - 1].push(member);
        }
    }

    ngOnInit(): void {
    }

}

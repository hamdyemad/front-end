import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { searchService } from "./search.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  panelOpenState = false;
  private query: string;
  searchedBooks: Array<any> = [];
  ordinaryBooks: Array<any> = [];
  private searchedBooksSub: Subscription;
  constructor(
    public searchService: searchService,
    public route: ActivatedRoute,
    private router: Router) {
    this.searchedBooks = searchService.searchedBooks;
    this.ordinaryBooks = searchService.ordinaryBooks;
  }

  ngOnInit() {

  }
  ngOnDestroy() {

  }


}

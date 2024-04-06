import { Component, OnInit } from '@angular/core';
import { Itab } from '../../models/tab';

@Component({
  selector: 'app-tab-for',
  templateUrl: './tab-for.component.html',
  styleUrls: ['./tab-for.component.scss']
})
export class TabForComponent implements OnInit {
  
  selectedFrameWork : string = 'angular'

  tabArr : Array<Itab> = [
    {
      tabTitle : 'angular',
      tabContent : '<p class="m-0 alert alert-info"><strong>Angular</strong>Lorem ipsum dolor, sit amet consectetur adipisicing elit.Quod quia inventore saepe impedit, dignissimos veritatis</p>'
    },
    {
      tabTitle : 'react',
      tabContent : '<p class="m-0 alert alert-info"><strong>React</strong>Lorem ipsum dolor, sit amet consectetur adipisicing elit.Quod quia inventore saepe impedit, dignissimos veritatis</p>'
    },
    {
      tabTitle : 'vue',
      tabContent : '<p class="m-0 alert alert-info"><strong>Vue</strong>Lorem ipsum dolor, sit amet consectetur adipisicing elit.Quod quia inventore saepe impedit, dignissimos veritatis</p>'
    },
    {
      tabTitle : 'sveltejs',
      tabContent : '<p class="m-0 alert alert-info"><strong>Sveltejs</strong>Lorem ipsum dolor, sit amet consectetur adipisicing elit.Quod quia inventore saepe impedit, dignissimos veritatis</p>'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

  onClickTab(val: string){
    console.log(val);
    this.selectedFrameWork = val;
  }

}

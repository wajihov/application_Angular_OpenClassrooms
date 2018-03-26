import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() titre: string;
  @Input() content: string;
  @Input() loveIts: number=0;
  @Input() created_it: Date;

  constructor() { }


  ngOnInit() {
  }
  onLoveIt(){
    this.loveIts=this.loveIts+1;
    console.log("hello "+this.loveIts);
  }
  onDontLoveIt(){
    this.loveIts=this.loveIts-1;
    console.log("diminuer "+this.loveIts);
  }
  getColor(){
    if(this.loveIts>0)
      return 'green';
    else if (this.loveIts<0)
      return 'red';
    else return 'blue';
  }
}

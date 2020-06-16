import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  identidad: string;
  constructor(private rutaActiva: ActivatedRoute) {
      this.identidad = this.rutaActiva.snapshot.paramMap.get('iden');
  }

  ngOnInit() {
  }

}

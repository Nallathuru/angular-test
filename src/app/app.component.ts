import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LokiComponent } from "./loki/loki.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, LokiComponent]
})
export class AppComponent {
  title = 'secondapp';
}

import {Component} from '@angular/core';
import {CdkDrag} from '@angular/cdk/drag-drop';

/**
 * @title Basic Drag&Drop
 */
@Component({
  selector: 'cdk-drag-drop-overview-example',
  templateUrl: 'cdk-drag-drop-overview-example.html',
  styleUrls: ['cdk-drag-drop-overview-example.css'],
  standalone: true,
  imports: [CdkDrag],
})
export class CdkDragDropOverviewExample {}


/**  Copyright 2023 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
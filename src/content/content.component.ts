import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  tableData = [
    { id: 1, employeeId: '001', associate: 'Haritha', startDate: '2024-01-05', expLevel: 'Senior', designation: 'Developer', project: 'Project A', squad: 'A', location: 'Trivandrum', vp: 'Hari' },
    { id: 2, employeeId: '002', associate: 'Angela', startDate: '2024-02-01', expLevel: 'Junior', designation: 'Designer', project: 'Project B', squad: 'B', location: 'Trivandrum', vp: 'Hari' }
    // Add more data as needed
  ];
}

import { Component, OnInit } from '@angular/core';
import { candidate, student } from '../classes/candidate';

@Component({
  selector: 'app-candidature',
  templateUrl: './candidature.component.html',
  styleUrls: ['./candidature.component.css']
})
export class CandidatureComponent implements OnInit {

  candidateObj: candidate;
  candidateArray: candidate[] = [];

  studentObj:student;

  constructor() {
    this.candidateObj = new candidate();

    this.studentObj= new student();
  }

  ngOnInit(): void {
    this.readLocalData();
  }
  readLocalData() {
    const localData = localStorage.getItem('candiData');
    if (localData != null) {
      this.candidateArray = JSON.parse(localData);
    }
  }

  onSave() {
    if (this.candidateObj.candidateId == 0) {
      this.candidateObj.candidateId == this.candidateArray.length + 1;
      this.candidateArray.push(this.candidateObj);
      localStorage.setItem('candiData', JSON.stringify(this.candidateArray))
    }
  }
  onClear() {

  }

  onEdit(id: number) {
    const currentRec = this.candidateArray.find(m => m.candidateId = id);
    if (currentRec !== undefined) {
      this.candidateObj.candidateId = currentRec.candidateId;
      this.candidateObj.candidateName = currentRec.candidateName;
      this.candidateObj.batch = currentRec.batch;
      this.candidateObj.technology = currentRec.technology;
      this.candidateObj.phone = currentRec.phone;
      this.candidateObj.email = currentRec.email;
      this.candidateObj.address = currentRec.address;
    }
  }


  onUpdate() {
    if (this.candidateObj.candidateId !== 0) {
      const currentRecord = this.candidateArray.find(m => m.candidateId = this.candidateObj.candidateId);
      if (currentRecord !== undefined) {
        currentRecord.candidateId = this.candidateObj.candidateId;
        currentRecord.candidateName = this.candidateObj.candidateName;
        currentRecord.batch = this.candidateObj.batch;
        currentRecord.technology = this.candidateObj.technology;
        currentRecord.phone = this.candidateObj.phone;
        currentRecord.email = this.candidateObj.email;
        currentRecord.address = this.candidateObj.address;
        localStorage.setItem('candiData', JSON.stringify(this.candidateArray))

      }

    }
  }
  onDelete(id: number) {
    const candiDelete = this.candidateArray.findIndex(m => m.candidateId = id)
    this.candidateArray.splice(candiDelete, 1);
    localStorage.setItem('candiData', JSON.stringify(this.candidateArray))

  }

}


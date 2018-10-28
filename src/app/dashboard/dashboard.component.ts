declare var require: any;

import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { Observable } from 'rxjs';
import { DashboardService } from './dashboard.services';

@Component({
    selector: 'dashboard-component',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.styles.css']
})
export class DashboardComponent implements OnInit {

    data: any = [
        {
            "id": 230,
            "firstName": "Aaryl",
            "middleName": null,
            "includeCCInHeadCount": true,
            "lastName": "Sharon Dsouza",
            "systemLookupName": null,
            "manager": 223,
            "managerName": "Ashish Das",
            "locationId": 1,
            "locationName": "Bangalore.PTP",
            "gsiNumber": "906952",
            "hcmNumber": "906952",
            "cellPhone": null,
            "deskPhone": null,
            "emailAddress": "aaryl.dsouza@oracle.com",
            "firstJobStartDate": null,
            "firstRelevantJobStartDate": null,
            "travelNotes": null,
            "prejoinAttrition": false,
            "attritionNotes": null,
            "osnId": null,
            "partnerOrgJoinDate": null,
            "partnerOrg": null,
            "trackingStartDate": "2016-08-25",
            "trackingEndDate": null,
            "createdBy": -1,
            "createdByName": null,
            "updatedBy": -1,
            "updatedByName": null,
            "createdOn": "2018-06-25",
            "lastUpdated": "2018-09-10",
            "alternate_phone_1": null,
            "alternate_phone_2": null,
            "alternate_phone_3": null,
            "legacy_excel_id": "SOA:143",
            "partner": false,
            "designationId": 2,
            "designationName": "Staff",
            "workerJournals": [],
            "workerTimeDefaults": [],
            "numberDirects": 0,
            "workerRoles": null,
            "workerPermissions": null,
            "workerManagement": null,
            "candidateId": 0,
            "costCenterId": 2,
            "costCenterCode": "501355",
            "costCenterShortDescription": "On Premise Integration",
            "costCenterLongDescription": "Integration",
            "costCenterRollup1Id": 6,
            "costCenterRollup1Code": "Integration Rollup",
            "costCenterRollup1ShortDescription": "Integration Rollup",
            "costCenterRollup1LongDescription": "Integration Rollup",
            "costCenterRollup2Id": 3,
            "costCenterRollup2Code": "Integration+Security",
            "costCenterRollup2ShortDescription": "Integration & IDM Rolllup",
            "costCenterRollup2LongDescription": "Integration & IDM Rolluo",
            "office": "PTP",
            "technicalResumeId": 0,
            "pmResumeId": 0,
            "deliveryResumeId": 0,
            "buddyWorkerId": 223,
            "buddyFullName": "Ashish  Das",
            "genderId": 62,
            "genderCode": "MALE",
            "genderDescription": "Male",
            "workerMovements": null,
            "workerVacations": null,
            "workerTrainings": null,
            "guid": "AARYDSOU",
            "normalizedName": "Aaryl Sharon Dsouza"
        },
        {
            "id": 413,
            "firstName": "Abhas",
            "middleName": null,
            "includeCCInHeadCount": true,
            "lastName": "Dubey",
            "systemLookupName": null,
            "manager": 360,
            "managerName": "Sudhesh Sudhakaran",
            "locationId": 5,
            "locationName": "Hyderabad",
            "gsiNumber": null,
            "hcmNumber": null,
            "cellPhone": null,
            "deskPhone": null,
            "emailAddress": "abhas.dubey@oracle.com",
            "firstJobStartDate": null,
            "firstRelevantJobStartDate": null,
            "travelNotes": null,
            "prejoinAttrition": false,
            "attritionNotes": null,
            "osnId": null,
            "partnerOrgJoinDate": null,
            "partnerOrg": "Zensar",
            "trackingStartDate": "2018-06-04",
            "trackingEndDate": null,
            "createdBy": -1,
            "createdByName": null,
            "updatedBy": -1,
            "updatedByName": null,
            "createdOn": "2018-06-25",
            "lastUpdated": "2018-09-10",
            "alternate_phone_1": null,
            "alternate_phone_2": null,
            "alternate_phone_3": null,
            "legacy_excel_id": "SOA:326",
            "partner": true,
            "designationId": 5,
            "designationName": "Principal",
            "workerJournals": [],
            "workerTimeDefaults": [],
            "numberDirects": 0,
            "workerRoles": null,
            "workerPermissions": null,
            "workerManagement": null,
            "candidateId": 0,
            "costCenterId": 2,
            "costCenterCode": "501355",
            "costCenterShortDescription": "On Premise Integration",
            "costCenterLongDescription": "Integration",
            "costCenterRollup1Id": 6,
            "costCenterRollup1Code": "Integration Rollup",
            "costCenterRollup1ShortDescription": "Integration Rollup",
            "costCenterRollup1LongDescription": "Integration Rollup",
            "costCenterRollup2Id": 3,
            "costCenterRollup2Code": "Integration+Security",
            "costCenterRollup2ShortDescription": "Integration & IDM Rolllup",
            "costCenterRollup2LongDescription": "Integration & IDM Rolluo",
            "office": "Hyderabad",
            "technicalResumeId": 0,
            "pmResumeId": 0,
            "deliveryResumeId": 0,
            "buddyWorkerId": 360,
            "buddyFullName": "Sudhesh  Sudhakaran",
            "genderId": 62,
            "genderCode": "MALE",
            "genderDescription": "Male",
            "workerMovements": null,
            "workerVacations": null,
            "workerTrainings": null,
            "guid": "ABHASDUB",
            "normalizedName": "Abhas Dubey"
        },
        {
            "id": 259,
            "firstName": "Abhinay",
            "middleName": null,
            "includeCCInHeadCount": true,
            "lastName": "Annangi",
            "systemLookupName": null,
            "manager": 158,
            "managerName": "Nagarjuna Kolisetty",
            "locationId": 5,
            "locationName": "Hyderabad",
            "gsiNumber": "C3871",
            "hcmNumber": "C3871",
            "cellPhone": null,
            "deskPhone": null,
            "emailAddress": "abhinay.annangi@oracle.com",
            "firstJobStartDate": null,
            "firstRelevantJobStartDate": null,
            "travelNotes": null,
            "prejoinAttrition": false,
            "attritionNotes": null,
            "osnId": null,
            "partnerOrgJoinDate": null,
            "partnerOrg": "Goldstone",
            "trackingStartDate": "2017-02-20",
            "trackingEndDate": null,
            "createdBy": -1,
            "createdByName": null,
            "updatedBy": -1,
            "updatedByName": null,
            "createdOn": "2018-06-25",
            "lastUpdated": "2018-09-10",
            "alternate_phone_1": null,
            "alternate_phone_2": null,
            "alternate_phone_3": null,
            "legacy_excel_id": "SOA:172",
            "partner": true,
            "designationId": 4,
            "designationName": "Senior",
            "workerJournals": [],
            "workerTimeDefaults": [],
            "numberDirects": 0,
            "workerRoles": null,
            "workerPermissions": null,
            "workerManagement": null,
            "candidateId": 0,
            "costCenterId": 2,
            "costCenterCode": "501355",
            "costCenterShortDescription": "On Premise Integration",
            "costCenterLongDescription": "Integration",
            "costCenterRollup1Id": 6,
            "costCenterRollup1Code": "Integration Rollup",
            "costCenterRollup1ShortDescription": "Integration Rollup",
            "costCenterRollup1LongDescription": "Integration Rollup",
            "costCenterRollup2Id": 3,
            "costCenterRollup2Code": "Integration+Security",
            "costCenterRollup2ShortDescription": "Integration & IDM Rolllup",
            "costCenterRollup2LongDescription": "Integration & IDM Rolluo",
            "office": "Hyderabad",
            "technicalResumeId": 0,
            "pmResumeId": 0,
            "deliveryResumeId": 0,
            "buddyWorkerId": 158,
            "buddyFullName": "Nagarjuna  Kolisetty",
            "genderId": 62,
            "genderCode": "MALE",
            "genderDescription": "Male",
            "workerMovements": null,
            "workerVacations": null,
            "workerTrainings": null,
            "guid": "AANNANGI",
            "normalizedName": "Abhinay Annangi"
        }];
   
    
    itemList = [];
    selectedManager = [];
    selectedLocation = [];
    selectedCC = [];
    selectedDesignation = [];
    selectedGender = [];

    managerSettings = {};
    locationSettings = {};
    costCenterSettings = {};
    designationSettings = {};
    genderSettings = {};
    chart: any;
    chart2: any;
    chart3: any;
    constructor(private service: DashboardService) { }
    ngOnInit() {
 this.chart = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Linechart'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Line 1',
        data: [1, 2, 3]
      }
    ]
  });
   this.chart2 = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Linechart'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Line 1',
        data: [1, 2, 3]
      }
    ]
  });
   this.chart3 = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Linechart'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Line 1',
        data: [1, 2, 3]
      }
    ]
  });

  // add point to chart serie

        this.service.getData().subscribe( data => {
           console.log(data);
           this.chart.addPoint(Math.floor(Math.random() * 10));
           this.chart2.addPoint(Math.floor(Math.random() * 10));
           this.chart3.addPoint(Math.floor(Math.random() * 10));
        });


        this.itemList = [
            { "countryId": 1, "itemName": "India" },
            { "countryId": 2, "itemName": "Singapore" },
            { "countryId": 3, "itemName": "Australia" },
            { "countryId": 4, "itemName": "Canada" },
            { "countryId": 5, "itemName": "South Korea" },
            { "countryId": 6, "itemName": "Brazil" }
        ];

        this.selectedManager = [];
        this.selectedLocation = [];
        this.selectedDesignation = [];
        this.selectedCC = [];
        this.selectedGender = [];
        this.managerSettings = {
            text: "Select Manager",
            primaryKey: "id",
            singleSelection: true,
            labelKey: 'managerName'
        };
        this.locationSettings = {
            text: "Select Location",
            primaryKey: "id",
            singleSelection: true,
            labelKey: "locationName"
        };
        this.costCenterSettings = {
            text: "Select Cost Center",
            primaryKey: "id",
            singleSelection: true,
            labelKey: "costCenterShortDescription"
        };
        this.designationSettings = {
            text: "Select Designation",
            primaryKey: "id",
            singleSelection: true,
            labelKey: "designationName"
        };
        this.genderSettings = {
            text: "Select Gender",
            primaryKey: "id",
            singleSelection: true,
            labelKey: "genderCode"
        };
    }

    onManagerUpdate(item: any) {
        this.service.setData({});
    }
    onLocationUpdate(item: any) {
         this.service.setData({});
    }
    onCCUpdate(item: any) {
         this.service.setData({});
    }
    onDesignationUpdate(item: any) {
         this.service.setData({});
    }
    onGenderUpdate(item: any) {
         this.service.setData({});
    }

}
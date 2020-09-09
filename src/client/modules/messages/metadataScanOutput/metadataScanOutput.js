import { LightningElement, api } from 'lwc';

const monitoredInvColumns = [
  {label: 'Metadata Type', fieldName: 'label', type: 'text'},
  {label: 'Count', fieldName: 'count', type: 'number'}
];


export default class MetadataScanOutput extends LightningElement {
  @api result;

  
}

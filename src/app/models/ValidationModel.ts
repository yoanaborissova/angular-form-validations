import {ErrorModel} from './ErrorModel';

export class ValidationModel {
  constructor(
    public touched: boolean = false,
    public errors: ErrorModel[] = []
  ) {

  }
}

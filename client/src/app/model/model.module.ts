import { NgModule } from '@angular/core';
import { BookRepository} from './book.repository';
import { RestDataSource } from './rest.datasource';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [ HttpClientModule ],
  providers: [ BookRepository, RestDataSource,
  { provide: RestDataSource, useClass: RestDataSource}]
})
export class ModelModule {}

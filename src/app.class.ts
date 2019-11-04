 
import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class AppModel {
  @ApiModelProperty({description:"編號"})
  id: number;

  @ApiModelProperty({description:"資料"})
  data: string;
}

export class AppCreate {
  @ApiModelProperty({required:true})
  @IsNotEmpty()
  data: string;
}

export class AppDelete {
  @ApiModelProperty()
  affected: number;
}

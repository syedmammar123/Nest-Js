import { Body, Controller } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get()
    findAll(){
        return []
    }

    @Get(':id')
    findOne(){

    }

    @Post()
    create(@Body user:{}){

    }
    @Patch(':id') // users/:id
    update(){

    }
    @Delete(':id') //Delete /users/:id
    delete(){

    }
}

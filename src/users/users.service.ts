import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
    
    private users = [
        {
            "id":1,
            "name":"Ammar",
            "role":"ENGINEER",
            "email":"abc@gmail.com"
        },
        {
            "id":2,
            "name":"Sam",
            "role":"INTERN",
            "email":"abc1@gmail.com"
            

        },
        {
            "id":3,
            "name":"Dam",
            "role":"ENGINEER",
            "email":"abc2@gmail.com"

        },
        {
            "id":4,
            "name":"Lam",
            "role":"INTERN",
            "email":"abc5@gmail.com"

        },
        {
            "id":5,
            "name":"Cam",
            "role":"ADMIN",
            "email":"abc9@gmail.com"

        },
    ]

    findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN'){
        if(role){
            const rolesArray  = this.users.filter(user=>user.role===role);
            if(rolesArray.length===0) throw new NotFoundException('User Role Not Found')
            return rolesArray
        }
        return this.users
    }

    findOne(id : number){
        const user =  this.users.find(user=>user.id===id)

        if(!user) throw new NotFoundException('User Not Found')

        return user
    }

    create(createUserDto: CreateUserDto){
        const getHighestId = [...this.users].sort((a,b)=>b.id-a.id)
        const newUser = {
            id:getHighestId[0].id+1,
            ...createUserDto
        }
        this.users.push(newUser)
        return newUser
    }
    update(id:number, updateUserDto: UpdateUserDto){
        this.users = this.users.map((user)=>{
            if(user.id===id){
                return {...user,...updateUserDto}
            }
        return user
        })
        return this.findOne(id)
    }
    
    delete(id:number){
        const removedUser = this.findOne(id)
        this.users = this.users.filter(user=> user.id!==id)
        return removedUser
    }


}

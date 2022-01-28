const mongoose=require("mongoose")

mongoose.connect('mongodb://localhost:27017/collegeDB', {useNewUrlParser:true});


const collegeSchema= new mongoose.Schema ({
    _id:Number,
    college_name:String,
    also_known_as:String,
    location:String,
    Institute_type:String,
    establishment_year:Number,
    campus_area:String,
    ranking:Number,
    mode_of_adm:String,

    courses_offered:{
        course1:{
            name_of_course:String,
            trade_1:String,
            trade_2:String,
            trade_3:String,
            trade_4:String,
            trade_5:String,
            trade_6:String,
            trade_7:String,
            trade_8:String
        },
        course2:{
            name_of_course:String,
            trade_1:String,
            trade_2:String,
            trade_3:String,
            trade_4:String,
            trade_5:String,
        },
        course3:{
            name_of_course:String,
            trade_1:String,
            trade_2:String,
            trade_3:String,
        }
    },

    seat_matrix:{ 
        b_tech:Number,
        bsc:String,
        other:String
    },

    fee:{
        institute_fee:String,
        hostel_fee:String,
        total_fee:String
    },

    cutoff:{
        year_1:{
            general:{
                branch:[{
                    branch_name:String,
                    opening_rank:Number,
                    closing_rank:Number
                }]
            },
            obc:{
                branch:[{
                    branch_name:String,
                    opening_rank:Number,
                    closing_rank:Number
                }]
            },
            ews:{
                branch:[{
                    branch_name:String,
                    opening_rank:Number,
                    closing_rank:Number
                }]
            },
            sc:{
                branch:[{
                    branch_name:String,
                    opening_rank:Number,
                    closing_rank:Number
                }]
            },
            st:{
                branch:[{
                    branch_name:String,
                    opening_rank:Number,
                    closing_rank:Number
                }]
            },
        },

        year_2:{
            general:{
                branch:[{
                    branch_name:String,
                    opening_rank:Number,
                    closing_rank:Number
                }]
            },
            obc:{
                branch:[{
                    branch_name:String,
                    opening_rank:Number,
                    closing_rank:Number
                }]
            },
            ews:{
                branch:[{
                    branch_name:String,
                    opening_rank:Number,
                    closing_rank:Number
                }]
            },
            sc:{
                branch:[{
                    branch_name:String,
                    opening_rank:Number,
                    closing_rank:Number
                }]
            },
            st:{
                branch:[{
                    branch_name:String,
                    opening_rank:Number,
                    closing_rank:Number
                }]
            },
        }

    },

    placements:{
        avg_sal:String,
        high_sal:String,
        no_of_companies:Number
    }

});

 const College=mongoose.model("College",collegeSchema);

const iitkgp=new College({
    _id:1,
    college_name:"IIT KHARAGPUR",
    also_known_as:"IITKGP",
    location:"KHARAGPUR WEST BENGAL",
    Institute_type:"Government Institute",
    establishment_year:2001,
    campus_area:"1800 acre",
    ranking:4,
    mode_of_adm:"JEE ADVANCED",

    courses_offered:{
        course1:{
            name_of_course:"B.Tech",
            trade_1:"Computer Engineering",
            trade_2:"Electronics and Communication Engineering",
            trade_3:"Electrical Engineering",
            trade_4:"Mechanical Engineering",
            trade_5:"Civil Engineering",
            trade_6:"Chemical Engineering",
            trade_7:"Petrochemical Engineering",
            trade_8:"Metallurgical Engineering"
        },
        course2:{
            name_of_course:"B.Sc",
            trade_1:"Physics",
            trade_2:"Chemistry",
            trade_3:"Mathematics",
            trade_4:"_",
            trade_5:"_"
        },
        course3:{
            name_of_course:"B.arch",
            trade_1:"Architectre",
            trade_2:"_",
            trade_3:"_"
        }
    },

    seat_matrix:{ 
        b_tech:400,
        bsc:100,
        other:40
    },

    fee:{
        institute_fee:"200000 rupees",
        hostel_fee:"50000 rupees",
        total_fee:"250000 rupees"
    },

    cutoff:{
        year_1:{
            general:{
                branch:
                [{ branch_name:"Computer Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electronics and Communication Engineeering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electrical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Mechanical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Civil Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Chemical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Petrochemical Engineering",opening_rank:400, closing_rank:560 }]
            },
            obc:{
                branch:
                [{ branch_name:"Computer Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electronics and Communication Engineeering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electrical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Mechanical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Civil Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Chemical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Petrochemical Engineering",opening_rank:400, closing_rank:560 }]
            },
            ews:{
                branch:
                [{ branch_name:"Computer Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electronics and Communication Engineeering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electrical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Mechanical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Civil Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Chemical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Petrochemical Engineering",opening_rank:400, closing_rank:560 }]
            },
            sc:{
                branch:
                [{ branch_name:"Computer Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electronics and Communication Engineeering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electrical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Mechanical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Civil Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Chemical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Petrochemical Engineering",opening_rank:400, closing_rank:560 }]
            },
            st:{
                branch:
                [{ branch_name:"Computer Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electronics and Communication Engineeering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electrical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Mechanical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Civil Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Chemical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Petrochemical Engineering",opening_rank:400, closing_rank:560 }]
            },
        },

        year_2:{
            general:{
                branch:
                [{ branch_name:"Computer Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electronics and Communication Engineeering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electrical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Mechanical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Civil Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Chemical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Petrochemical Engineering",opening_rank:400, closing_rank:560 }]
            },
            obc:{
                branch:
                [{ branch_name:"Computer Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electronics and Communication Engineeering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electrical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Mechanical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Civil Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Chemical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Petrochemical Engineering",opening_rank:400, closing_rank:560 }]
            },
            ews:{
                branch:
                [{ branch_name:"Computer Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electronics and Communication Engineeering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electrical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Mechanical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Civil Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Chemical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Petrochemical Engineering",opening_rank:400, closing_rank:560 }]
            },
            sc:{
                branch:
                [{ branch_name:"Computer Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electronics and Communication Engineeering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electrical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Mechanical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Civil Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Chemical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Petrochemical Engineering",opening_rank:400, closing_rank:560 }]
            },
            st:{
                branch:
                [{ branch_name:"Computer Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electronics and Communication Engineeering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electrical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Mechanical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Civil Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Chemical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Petrochemical Engineering",opening_rank:400, closing_rank:560 }]
            },
        }

    },

    placements:{
        avg_sal:"10 lakhs per Annum",
        high_sal:"90 lakhs per Annum",
        no_of_companies:89
    }

});

const str=JSON.stringify(iitkgp);
console.log(str);



// College.insertMany([iitkgp],function(err){
//     if(err){
//         console.log(err);
//     } else{ 
//         console.log("successfully saved all the documents");
//     }
// });

College.find(function(err,colleges){
    if(err){
        console.log(err);
    } else{ 
        console.log(colleges);
    }
});


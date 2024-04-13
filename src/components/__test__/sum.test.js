// import { sum } from "../sum";

import { hello } from "../hello";





test("Sum function should calculate sum of two number",()=>{
        const result = hello(3,2)

        //Assertion
        expect(result).toBe(5);
})
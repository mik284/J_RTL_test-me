import { expect, test } from "vitest";

function sum(a,b){
    return a+b;
}

test("Find the sum of a and b",()=>{
    expect(sum(3,2)).toEqual(3)
})
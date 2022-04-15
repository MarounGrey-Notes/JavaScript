### Terminology

Paradigms: Approaches and mindsets of structuring code, which will direct your coding style and technique. <br>
Concurrency model: how Javascript engine handles multiple tasks happening at the same time. <br>
Thread (in computing): set of instructions that is executed on the computer's cpu. <br>

### How JavaScript works behind the scenes

* **High Level:** Javascript doesnt require to use resources (like memory).
* **Garbage-collected:** Cleaning memory so we dont have to.
* **Interprited or just-in-time compiled:** Conversion to machine code happens inside the JavaScript engine.
*  **Multi-paradigm:** Javascript uses multiple Paradigms:
    1. Procedural Programming
    2. Object-oriented programming (OOP)
    3. Functional programming (FR)
* Prototype-based object-oriented
* **First-class functions:** In a language with **first-class functions**, functions are simply **treated as variables**. We can pass them into other functions, and return them from functions.
*  **Dynamically-typed language:** No data type definitions. Types become known at runtime and can be changed automatically.
*  **Single-threaded:** JavaScript runs in one **single thread**, so it can only do one thing at the time.
*  **Non-blocking event loop:** Tasks that are taking too long to execute are getting executed in the "background" and get back in the main thread once they are finished.

### JavaScript Engine and Runtime
JS Engine - program that executes javascript code <br>


            *************** JS Engine ***************

                +++++++++++++++     +++++++++++++++    
                +             +     +   #    #    +    
                +             +     +           # +    
                +             +     +     #       +    
                +             +     +   #      #  +           
    Execution   + ########### +     + #    #      +     Object in       
    context ->  + ########### +     +   #   #     +  <- memory       
                +++++++++++++++     +++++++++++++++
                   CALL STACK             HEAP              
                   
                Where our code      Where objects
                is executed         are stored
       
       
       

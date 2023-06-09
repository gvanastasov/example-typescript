(
    /**
     * @description provide a way to define blueprints for creating 
     * objects with shared properties and behaviors. They are a 
     * fundamental part of object-oriented programming and allow you 
     * to create reusable and organized code.
     */
    function syntax() {
        class User {};
    }
)();

(
    /**
     * @description variables that belong to a class and define the 
     * state or characteristics of objects created from that class.
     * they can be initialized before instance is constructed.
     */
    function properties() {
        class User {
            name: string;
            flag = true;
        }

        let user = new User();
        user.name = "John";
        if (user.flag) {
            user.flag = false;
        }
    }
)();

(
    /**
     * @description Readonly members are properties that can only be 
     * assigned a value during object initialization or within the 
     * class constructor. Once assigned, their value cannot be changed.
     */
    function readonly() {
        class User {
            readonly deleted = false;
        }

        let user = new User();

        try {
            // @ts-expect-error
            user.deleted = true;
        } catch {
            console.log("Cannot assign to 'deleted' because it is a read-only property.");
        }
    }
)();

(
    /**
     * @description special methods that are invoked when creating a 
     * new instance of a class. They are used to initialize the object's 
     * state and set initial values for its properties. Constructors 
     * are defined using the constructor keyword and can accept 
     * parameters.
     */
    function constructors() {
        class User {
            private name: string;
            constructor (name: string) {
                this.name = name;
            }
        }

        try {
            // @ts-expect-error
            let user = new User();
        } catch {
            console.log("An argument for 'name' was not provided.");
        }

        // OK
        let user = new User("John");
    }
)
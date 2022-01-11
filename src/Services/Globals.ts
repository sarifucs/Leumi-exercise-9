class Globals{
}

class DevelopmentGlobals extends Globals{
    public urls={
        todo: "https://raw.githubusercontent.com/KobiShashs/TODO-JSON/main/tasks"
    }
}

class ProductionGlobals extends Globals{
    public urls={
        todo: "https://raw.githubusercontent.com/KobiShashs/TODO-JSON/main/tasks"
    }
}


const globals = process.env.NODE_ENV === 'production' ? new ProductionGlobals : new DevelopmentGlobals;
export default globals;

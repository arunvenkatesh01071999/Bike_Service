import Adding from "./Adding";
import Headers from "./Headers";

export default function DashBoard(){

    return(
        <>
        <div className="container-fluid">
            <Headers/>
        </div>
        <div className="container-fluid">
            <Adding/>
        </div>
        </>
    );
}
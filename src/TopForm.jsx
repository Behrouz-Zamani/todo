import React from "react";

const TopForm = () => {
    return (
        <div>
            <h4 className="text-center text-info textshdow">
                Wellcome To mini React project
            </h4>

            <form>
                <div className="form-group d-flex">
                    <input type="text" className="form-control" />
                    <buttom type="submit" className="btn btn-success ms-1">ُSave</buttom>
                </div>
            </form>
        </div>
    );
}
export default TopForm
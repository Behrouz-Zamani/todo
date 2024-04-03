import React, { Fragment } from "react";
const TopForm = () => {

    return (
        <Fragment>
            <h4 className="text-center text-info textshdow">
                Wellcome To mini React project
            </h4>

            <form>
                <div className="form-group d-flex">
                    <input type="text" className="form-control" />
                    <buttom type="submit" className="btn btn-success ms-1">Save</buttom>
                </div>
            </form>
        </Fragment>
    );
}
export default TopForm
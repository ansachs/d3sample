import * as React from "react";
import {render} from 'react-testing-library'
import {RootComponent} from "../RootComponent";

describe("pie chart", function () {
    it('should mount', function () {
        const c = render(<RootComponent/>);

        console.error("=============> c.debug(): ", c.debug());

        expect(c.container.querySelectorAll(".arc")).toHaveLength(8)
    });
});
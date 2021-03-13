import React from 'react';
import renderer, {act} from 'react-test-renderer';
import ContentGrab from './ContentGrab';

describe("ContentGrab", () => {
    it('should render correctly ', () => {
        const tree = renderer.create(<ContentGrab/>).toJSON()
        expect(tree).toMatchSnapshot()
    });

    it('should handle click', () => {
        let component;

        act(() => {
            component = renderer.create(<ContentGrab/>)
        })
        expect(component.toJSON()).toMatchSnapshot();

        act(() => {
            component.root.findByType('button').props.onClick();
        })
        expect(component.toJSON()).toMatchSnapshot();
    })
})
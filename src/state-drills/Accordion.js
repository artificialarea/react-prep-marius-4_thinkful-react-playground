import React from 'react';

class Accordion extends React.Component {
    static defaultProps = {
        sections: []
    };

    state = {
        activeSectionIndex: null,
    }

    handleSetActiveSection = (sectionIndex) => {
        this.setState({ activeSectionIndex: sectionIndex })
    }

    renderItem(section, idx, activeSectionIndex) {
        return (
            <li>

            </li>
        )
    }
    render() {
    const { sections } = this.props
    return (
        <div>
            <ul className='Accordion'>

            </ul>
        </div>
    )
}
}

export default Accordion
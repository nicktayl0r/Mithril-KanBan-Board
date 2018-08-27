import m from "mithril";
const state = {
    cards: [["lorem", "ipsum"],["lorem", "ipsum"]],
    addCard: (index, newCard) => state.cards[index].push(newCard),
    moveCardLeft: () => {},
    moveCardRight:() => {}
}

const Kanban = {
    view: function(vnode) {
        return [m("h1", "Kanban Time")]
    }
}


m.mount(document.body, Kanban);


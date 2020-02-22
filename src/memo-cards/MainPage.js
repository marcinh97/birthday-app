import one1 from "./assets/one1.jpg"
import one2 from "./assets/one2.jpg"
import React from "react";
import MemoCardContainer from "./MemoCardContainer";

class MainPage extends React.PureComponent {
    static shuffle(a) {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }

    getBasicPictures() {
        return [
            {
                realId: 0,
                id: 1,
                url: one1
            },
            {
                realId: 0,
                id: 2,
                url: one2
            }
        ]
    }

    getRandomPictures() {
        const basicPictures = this.getBasicPictures()
        const copiedPictures = [...basicPictures]
        return MainPage.shuffle(basicPictures.concat(copiedPictures))
            .map((pic, id) => ({
                realId: id,
                id: pic.id,
                url: pic.url
            }))

    }

    render() {
        return (
            <div>
                <h2>Urodzinowe memo Wojtka</h2>
                <p>Zagraj</p>
                <MemoCardContainer allPics={this.getRandomPictures()}/>
            </div>
        )
    }
}

export default MainPage
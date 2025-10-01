import { UserInfo } from "../Info";
import RankItem from "./RankItem";

const { ccclass, property } = cc._decorator;

@ccclass
export default class RankingList extends cc.Component {

    @property(cc.ScrollView)
    scrollView: cc.ScrollView = null;

    @property(cc.Prefab)
    rankItemPrefab: cc.Prefab = null;

    apiUrl: string = "https://5d820f171c8ff70014ef438d.mockapi.io/1/ranking-list";

    start() {
        this.loadRanking();
        console.log("UserInfo Level : " + UserInfo.level.toString());

    }

    loadRanking() {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", this.apiUrl, true);
        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                let data = JSON.parse(xhr.responseText); 

                // Sort ascending by level
                data.sort((a, b) => a.level - b.level);


                // Add you when you in top 10
                for (let i = 0; i < data.length; i++) {
                    const item = data[i];
                    console.error(item.name + " : " + item.level.toString());
                    if (item.level <= UserInfo.level) {
                        if (i === 0) {
                            item.level = UserInfo.level;
                            item.name = "YOU";
                        } else {
                            const tempName = "YOU";
                            const tempLevel = UserInfo.level;

                            data[i - 1].name = item.name;
                            data[i - 1].level = item.level;

                            item.name = tempName;
                            item.level = tempLevel;
                        }
                    }
                }

                // Sort descending by level
                data.sort((a, b) => b.level - a.level);
                this.populateScrollView(data);
            } else {
                console.error("XHR failed:", xhr.status);
            }
        };
        xhr.onerror = () => console.error("XHR request error");
        xhr.send();
    }

    populateScrollView(rankingData: any[]) {


        const content = this.scrollView.content;
        content.removeAllChildren();

        if (UserInfo.getData)

            rankingData.forEach((item, index) => {
            const node = cc.instantiate(this.rankItemPrefab);
            const rankItemComp = node.getComponent(RankItem);
            rankItemComp.init(index + 1, item.level, item.name);
            content.addChild(node);
        });

        const itemHeight = this.rankItemPrefab.data.height;
        content.height = rankingData.length * itemHeight;
    }






}

const RuleDetail = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">ルール</h2>
        <ul className="list-disc ml-6 space-y-2 text-gray-700">
          <li>1試合35分、30分時点で次のイニングに入らない</li>
          <li>
            30分時点で先攻のチームの攻撃の場合、その時点で試合終了、前のイニングまでの点数を参考に試合の勝敗を決定する
            <ul className="list-disc ml-6 mt-1 space-y-1">
              <li>(例) 5回表で先攻チームの攻撃の場合、4回裏までの点数にて、勝敗を決める(5回表に獲得した点数には含めない)</li>
            </ul>
            <li>30分時点で後攻のチームの攻撃の場合、イニング終了まで続ける</li>
          </li>
          <li>コールドゲームなし</li>
          <li>四球なし</li>
          <li>盗塁、スライディング、リード、バントは禁止(行った場合はアウト)</li>
          <li>基本スローピッチ、ウィンドミルは禁止にしませんが、打者が楽しめるスピードで</li>
          <li>女性プレイヤーは、内野ゴロ補球、内外野フライを体の一部に打球を当てた場合、アウトとみなす</li>
          <li>金属製スパイクの禁止(けが防止のため)</li>
          <li>試合終了後、ピュア代表者に報告</li>
        </ul>
      </div>
    </div>
  );
};

export default RuleDetail;

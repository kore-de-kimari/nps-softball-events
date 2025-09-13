const RequestDetail = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">お願い</h2>
        <ul className="list-disc ml-6 space-y-2 text-gray-700">
          <li>試合中の審判は攻撃チームのメンバーが主審をお願いします</li>
          <li>際どいライン線のあたりはファール、際どいタイミングのジャッジはアウト</li>
          <li>それぞれのチームでMVPの選出をお願いします</li>
        </ul>
      </div>
    </div>
  )
}

export default RequestDetail
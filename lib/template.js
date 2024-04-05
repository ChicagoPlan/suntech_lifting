module.exports = {
  HTML:function(A_kg, A_rpm, B_kg, B_rpm){
    return `
    <!doctype html>
    <html>
    <head>
        <title>Controller</title>
        <meta charset="utf-8">
        <link rel="stylesheet" href="/css/style_lifting.css">
        <script>
            setTimeout(function() { 
                location.reload();
            }, 1000);
        </script>
    </head>
    <body>
        <div id="main">
            <div id="frameTitle">
                <label><b>썬테크 밸브 리프팅 툴 ver.1</b></label>
            </div>
            <div id="frameBody">
                <div id="frameBodyPart" style="border: 4px solid blue">
                    <!-- row 1 -->
                    <div style="background-color: lightblue; grid-column: 1/4; grid-row: 1/2;">
                        <label for="" style="font-size: 95px;"><b>Winch A</b></label>
                    </div>

                    <!-- row 2 -->
                    <div style="margin-top: 52%;">
                        <label for="" style="font-size: 60px;"><b>중량</b></label></div>
                    <div style="margin-top: 20%;" id="dvi_A_kg">
                        <input type="text" class="frameBodyInput" value="${A_kg}" readonly id="A_kg">
                    </div>
                    <div style="margin-top: 52%;">
                        <label for="" style="font-size: 60px;"><b>kg</b></label>
                    </div>

                    <!-- row 3 -->
                    <div style="grid-column: 1/4; grid-row: 3/4;">
                        <label for="" style="font-size: 35px;"><b>한계중량 1,650kg</b></label>
                    </div>

                    <!-- row 4 -->
                    <div style="margin-top: 52%;">
                        <label for="" style="font-size: 60px;"><b>속도</b></label>
                    </div>
                    <div style="margin-top: 20%;">
                        <input type="text" class="frameBodyInput" value="${A_rpm}" readonly id="A_rpm"></div>
                    <div style="margin-top: 52%;">
                        <label for="" style="font-size: 60px;"><b>RPM</b></label>
                    </div>

                    <!-- row 5 -->
                    <div style="grid-column: 1/4; grid-row: 5/6;">
                        <label for="" style="font-size: 35px;"><b>제한속도 3m/min</b></label>
                    </div>
                </div>
                <div id="frameBodyPart" style="border: 4px solid blue">
                    <!-- row 1 -->
                    <div style="background-color: lightblue; grid-column: 1/4; grid-row: 1/2;">
                        <label for="" style="font-size: 95px;"><b>Winch B</b></label>
                    </div>

                    <!-- row 2 -->
                    <div style="margin-top: 52%;">
                        <label for="" style="font-size: 60px;"><b>중량</b></label></div>
                    <div style="margin-top: 20%;">
                        <input type="text" class="frameBodyInput" value="${B_kg}" readonly id="B_kg">
                    </div>
                    <div style="margin-top: 52%;">
                        <label for="" style="font-size: 60px;"><b>kg</b></label>
                    </div>

                    <!-- row 3 -->
                    <div style="grid-column: 1/4; grid-row: 3/4;">
                        <label for="" style="font-size: 35px;"><b>한계중량 600kg</b></label>
                    </div>

                    <!-- row 4 -->
                    <div style="margin-top: 52%;">
                        <label for="" style="font-size: 60px;"><b>속도</b></label>
                    </div>
                    <div style="margin-top: 20%;">
                        <input type="text" class="frameBodyInput" value="${B_rpm}" readonly id="B_rpm"></div>
                    <div style="margin-top: 52%;">
                        <label for="" style="font-size: 60px;"><b>RPM</b></label>
                    </div>

                    <!-- row 5 -->
                    <div style="grid-column: 1/4; grid-row: 5/6;">
                        <label for="" style="font-size: 35px;"><b>제한속도 3m/min</b></label>
                    </div>
                </div>
            </div>
        </div>
    </body>
    </html>
    `;
  }
}

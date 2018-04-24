<!doctype html>
<!--
Copyright 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at

    http://aws.amazon.com/apache2.0/

or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
-->
<html>
<head>
    <title>Leaderboards</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <link rel="stylesheet" href="leaderboard.css">
</head>
<body>
    <script id="entry-template" type="text/x-custom-template">
        <div class="entry">
            <span class="rank"></span>
            <div class="user-info">
                <span class="user-name"></span>
                <span class="user-points"></span> points
            </div>
        </div>
    </script>
    
    <div class="button-list">
        <button class="connect btn">Connect to chat</button>
        <button class="disconnect btn">Disconnect from chat</button>
        <button class="display btn">Populate leaderboard</button>
    </div>

    <div id="leaderboard">
        <div class="header">Leaderboard</div>
        <div class="leaderboard-output"></div>
    </div>

    <script src="chatbot.js"></script>
    <script>
    $(document).ready(function(){
        $('.connect').click(function(){
            window.chatClient.open();
        });
        $('.disconnect').click(function(){
            window.chatClient.close();
        });
        $('.display').click(function(){
            buildLeaderboard();
        });
    });

    window.chatClient = new chatClient({
        channel: '#marick2018gogo',
        username: 'marick2003',
        password: 'oauth:nrb4zh87g5mrr3mr4inclp941mu1bj',
    });
    </script>
</body>
</html>
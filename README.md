# Practice-App
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Restaurant Calculator</title>
    <link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body>
    <div id="main">
        <table class="c">
            <tr>
                <td colspan="3"><label for="total-field">Total:</label><input id="total-field" type="text" name="total-field"></td>
            </tr>
            <tr class="b">
            </tr>
                <td colspan="3"></td>
            <tr>
                <td><label>Tip: <span id="tip-amount">$0.0</span></label></td>
                <td><label for="rate-field">Rate:</label><input id="rate-field" type="text" name="rate-field" value="  "></td>
            </tr>
            <tr>
                <td><label>Tax: <span id="tax-amount">$0.0</span></label></td>
                
            </tr>
            <tr>
                <td><label>Grand Total: <span id="grand-total">$0.0</span></label></td>
            </tr>
        </table>
        
        <div id="b1">
            <button id="btn-calculate">Calculate</button>
        </div>
    </div>

    <script src="scripts/restaurant.js"></script>
</body>
</html>

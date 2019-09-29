<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### Table of Contents

-   [Main][1]
    -   [setBananodeApi][2]
        -   [Parameters][3]
    -   [setBananodeApiUrl][4]
        -   [Parameters][5]
-   [BananoUtil][6]
    -   [sendAmountToAccountWithRepresentativeAndPrevious][7]
        -   [Parameters][8]
    -   [sendAmountToAccount][9]
        -   [Parameters][10]
    -   [changeRepresentativeForSeed][11]
        -   [Parameters][12]
    -   [getAccountFromSeed][13]
        -   [Parameters][14]
    -   [openAccountFromSeed][15]
        -   [Parameters][16]
    -   [getBlockHash][17]
        -   [Parameters][18]
-   [DepositUtil][19]
    -   [receiveDepositsForSeed][20]
        -   [Parameters][21]
-   [BananodeApi][22]
    -   [getAccountBalanceRaw][23]
        -   [Parameters][24]
    -   [getAccountHistory][25]
        -   [Parameters][26]
    -   [getAccountInfo][27]
        -   [Parameters][28]

## Main

### setBananodeApi

Sets the Bananode Api (useful for overriding some methods)

#### Parameters

-   `_bananodeApi` **[string][29]** the new bananodeApi

Returns **[undefined][30]** returns nothing.

### setBananodeApiUrl

Sets the URL to use for the node behind the Bananode Api

#### Parameters

-   `url` **[string][29]** the new url

Returns **[undefined][30]** returns nothing.

## BananoUtil

### sendAmountToAccountWithRepresentativeAndPrevious

Sends the amount to the account with an optional representative and
previous block hash.
If the representative is not sent, it will be pulled from the api.
If the previous is not sent, it will be pulled from the api.
Be very careful with previous, as setting it incorrectly
can cause an incorrect amount of funds to be sent.

#### Parameters

-   `seed` **[string][29]** the seed to use to find the account.
-   `seedIx` **[string][29]** the index to use with the seed.
-   `destAccount` **[string][29]** the destination account.
-   `amountRaw` **[string][29]** the amount to send, in raw.
-   `representative` **[string][29]** the representative (optional).
-   `previousHash` **[string][29]** the previous hash (optional).

Returns **[string][29]** returns the hash returned by the send.

### sendAmountToAccount

Sends the amount to the account with a callback for success and failure.

#### Parameters

-   `seed` **[string][29]** the seed to use to find the account.
-   `seedIx` **[string][29]** the index to use with the seed.
-   `destAccount` **[string][29]** the destination account.
-   `amountRaw` **[string][29]** the amount to send, in raw.
-   `successCallback` **[string][29]** the callback to call upon success.
-   `failureCallback` **[string][29]** the callback to call upon failure.

Returns **[string][29]** returns the hash returned by the send.

### changeRepresentativeForSeed

Sets the rep for an account with a given seed.

#### Parameters

-   `seed` **[string][29]** the seed to use to find the account.
-   `seedIx` **[string][29]** the index to use with the seed.
-   `representative` **[string][29]** the representative.

Returns **[string][29]** returns the hash returned by the change.

### getAccountFromSeed

Get the account with a given seed and index.

#### Parameters

-   `seed` **[string][29]** the seed to use to find the account.
-   `seedIx` **[string][29]** the index to use with the seed.

Returns **[string][29]** the account.

### openAccountFromSeed

Open an account with a given seed.

#### Parameters

-   `seed` **[string][29]** the seed to use to find the account.
-   `seedIx` **[string][29]** the index to use with the seed.
-   `representative` **[string][29]** the representative.
-   `pendingBlockHash` **[string][29]** the pending block hash.
-   `pendingValueRaw` **[string][29]** the pending block hash.

Returns **[string][29]** returns the hash returned by the open.

### getBlockHash

Get the hash for a given block.

#### Parameters

-   `block` **[string][29]** the seed to use to find the account.

Returns **[string][29]** the block's hash.

## DepositUtil

### receiveDepositsForSeed

Recieve all deposits for an account with a given seed.

#### Parameters

-   `seed` **[string][29]** the seed to use to find the account.
-   `seedIx` **[string][29]** the index to use with the seed.
-   `representative` **[string][29]** the representative.

Returns **[object][31]** returns the response returned by the receive.

## BananodeApi

### getAccountBalanceRaw

Get the balance, in raw, for an account.

(use other methods like getBananoPartsFromRaw to convert to banano or banoshi)

Calls [https://docs.nano.org/commands/rpc-protocol/#accounts_balances][32]

#### Parameters

-   `account` **[string][29]** the account to use.

Returns **[string][29]** the account's balance, in raw.

### getAccountHistory

Get the history for an account.

Calls [https://docs.nano.org/commands/rpc-protocol/#account_history][33]

#### Parameters

-   `account` **[string][29]** the account to use.
-   `count` **[string][29]** the count to use (use -1 for all).
-   `head` **[string][29]** the head to start at (optional).
-   `raw` **[string][29]** if true, return raw history (optional).

Returns **[object][31]** the account's history.

### getAccountInfo

Get the account info for an account.

Calls [https://docs.nano.org/commands/rpc-protocol/#account_info][34]

#### Parameters

-   `account` **[string][29]** the account to use.

Returns **[object][31]** the account's info.

[1]: #main

[2]: #setbananodeapi

[3]: #parameters

[4]: #setbananodeapiurl

[5]: #parameters-1

[6]: #bananoutil

[7]: #sendamounttoaccountwithrepresentativeandprevious

[8]: #parameters-2

[9]: #sendamounttoaccount

[10]: #parameters-3

[11]: #changerepresentativeforseed

[12]: #parameters-4

[13]: #getaccountfromseed

[14]: #parameters-5

[15]: #openaccountfromseed

[16]: #parameters-6

[17]: #getblockhash

[18]: #parameters-7

[19]: #depositutil

[20]: #receivedepositsforseed

[21]: #parameters-8

[22]: #bananodeapi

[23]: #getaccountbalanceraw

[24]: #parameters-9

[25]: #getaccounthistory

[26]: #parameters-10

[27]: #getaccountinfo

[28]: #parameters-11

[29]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String

[30]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/undefined

[31]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object

[32]: https://docs.nano.org/commands/rpc-protocol/#accounts_balances

[33]: https://docs.nano.org/commands/rpc-protocol/#account_history

[34]: https://docs.nano.org/commands/rpc-protocol/#account_info
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import { AdaptiveDialog, EditArray, ArrayChangeType, SendActivity, IfCondition, LogStep } from "botbuilder-dialogs-adaptive";
import { getRecognizer } from "../recognizer";

export class ClearToDos extends AdaptiveDialog {
    constructor() {
        super('ClearToDos', [
            new LogStep(`ClearToDos: todos = {user.todos}`),
            new IfCondition(`user.todos != null`, [
                new EditArray(ArrayChangeType.clear, 'user.todos'),
                new SendActivity(`All todos removed.`)
            ]).else([
                new SendActivity(`No todos to clear.`)
            ])
        ]);

        // Use parents recognizer
        this.recognizer = getRecognizer();
    }
}


window.addEventListener('load', async () =>
            {
                var canvas = document.getElementById('display_canvas');

                const connectionInfo = await SDK3DVerse.webAPI.createOrJoinSession(AppConfig.sceneUUID);

                SDK3DVerse.notifier.on('onLoadingStarted', () => document.getElementById("message").innerHTML = "Connecting...");
                SDK3DVerse.notifier.on('onLoadingProgress', (status) => document.getElementById("message").innerHTML = status.message);
                SDK3DVerse.notifier.on('onLoadingEnded', (status) => document.getElementById("message").innerHTML = status.message);

                SDK3DVerse.setupDisplay(canvas);
                SDK3DVerse.startStreamer(connectionInfo);

                SDK3DVerse.installExtension(SDK3DVerse_Gizmos_Ext);
                SDK3DVerse.connectToEditor();
                SDK3DVerse_Entity.attachComponent("6f8029b0-c4b7-43b9-87f4-9ccf3466568a",0)
                canvas.addEventListener(
                    'mouseup',
                    async (e) =>
                    {
                        var keepOldSelection = e.ctrlKey || e.metaKey;
                        var {entity} = await SDK3DVerse.engineAPI.castScreenSpaceRay(e.clientX, e.clientY, true);
                        SDK3DVerse_Entity.setComponent(entity,)

                        if(entity)
                        {
                            document.getElementById('selected_entity').innerHTML = `Selected entity : <strong>${entity.getName()}</strong>`;
                        }
                    },
                    false
                );
            });
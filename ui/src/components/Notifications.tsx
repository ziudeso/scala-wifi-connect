import * as React from 'react';
import { Txt, Alert } from 'rendition';

export const Notifications = ({
	hasAvailableNetworks,
	attemptedConnect,
	error,
}: {
	hasAvailableNetworks: boolean;
	attemptedConnect: boolean;
	error: string;
}) => {
	return (
		<>
			{attemptedConnect && (
				<Alert m={2} info>
					<Txt.span>Sto applicando le modifiche... </Txt.span>
					<Txt.span>
            Il device sarà online a breve. Se la connessione non avrà successo,
            l'access point entrerà in funzione nuovamente in pochi minuti e potrai riprovare.
					</Txt.span>
				</Alert>
			)}
			{!hasAvailableNetworks && (
				<Alert m={2} warning>
					<Txt.span>Non ci sono reti WiFi disponibili.&nbsp;</Txt.span>
					<Txt.span>
						Cerca di entrare nel range di una rete WiFi e riprova.
					</Txt.span>
				</Alert>
			)}
			{!!error && (
				<Alert m={2} danger>
					<Txt.span>{error}</Txt.span>
				</Alert>
			)}
		</>
	);
};

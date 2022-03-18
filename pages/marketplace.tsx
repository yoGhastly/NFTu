import { Card, CircleLoader } from '../components';
import { NextPage } from 'next';
import { PageLayout } from '../components';
import { useFetchNFT } from '../hooks';
import { DataResponse, OwnedNft } from '../interfaces';

const Marketplace: NextPage = () => {
	const ownerAddr: string = '0x7217bc604476859303a27f111b187526231a300c';
	const { data } = useFetchNFT(ownerAddr);
	const { ownedNfts } = (data as DataResponse) || { ownedNfts: [] };

	return !data ? (
		<h2 className="flex justify-center">
			<CircleLoader />
		</h2>
	) : (
		<>
			<PageLayout title="NFTu - Marketplace">
				<h1 className="text-bold text-3xl xl:m-11 xl:text-left text-center mt-11">
					Trending .
				</h1>
				<div className="flex m-14 justify-center">
					<div className="xl:grid xl:gap-x-8 xl:grid-cols-4">
						{ownedNfts.slice(18, 22).map((nft: OwnedNft) => (
							<Card
								key={nft.id.tokenId}
								image={nft.media[0].gateway}
								title={nft.title}
								name="NFTu"
								address={nft.contract.address}
								link="https://opensea.io/"
							/>
						))}
					</div>
				</div>
			</PageLayout>
		</>
	);
};

export default Marketplace;

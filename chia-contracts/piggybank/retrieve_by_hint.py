from chia.rpc.full_node_rpc_client import FullNodeRpcClient
import asyncio
from chia.util.config import load_config
from chia.util.default_root import DEFAULT_ROOT_PATH
import aiohttp
from chia.util.ints import uint16, uint32
from chia.types.blockchain_format.sized_bytes import bytes32


async def get_full_node_client():
    config = load_config(DEFAULT_ROOT_PATH, "config.yaml")
    self_hostname = config["self_hostname"]
    node_rpc_port = config["full_node"]["rpc_port"]

    try:
        full_node_client = await FullNodeRpcClient.create(
            self_hostname, uint16(node_rpc_port), DEFAULT_ROOT_PATH, config
        )
        return full_node_client
    except Exception as e:
        if isinstance(e, aiohttp.ClientConnectorError):
            print(f"Connection error. Check if node is running at {node_rpc_port}")
        else:
            print(f"Exception from 'node' {e}")
        return None


async def retrieve_record_by_hint(hint):
    full_node_client : FullNodeRpcClient = await get_full_node_client()
    record = await full_node_client.get_coin_records_by_puzzle_hash(hint)
    return record


hint = bytes32.from_hexstr('29a898c63235d4772f7a87173df77629de55c56c0af4953dec70af29f6367fed')
coin_record = asyncio.get_event_loop().run_until_complete(
    retrieve_record_by_hint(hint)
)
print(coin_record)